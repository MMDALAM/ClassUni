const controller = require("app/http/controllers/controller");
const Class = require("app/models/class");
const Plan = require("app/models/plan");
const TeacherAuth = require("app/models/teacherAuth");
const Lesson = require("app/models/lesson");
const Term = require("app/models/term");
const Field = require("app/models/field");

class classSingleController extends controller {
  async single(req, res, next) {
    try {
      this.isMongoId(req.params.id);

      const singleClass = await Class.findById(req.params.id);
      const Lessons = await Lesson.find().sort({ createdAt: -1 });
      const terms = await this.terms();
      const fields = await this.fields();
      const teachersAuth = await this.Teachers();

      const reports = await Plan.find({ class: req.params.id });

      res.render("./teacher/single-class", {
        teachersAuth,
        Lessons,
        terms,
        fields,
        singleClass,
        reports,
      });
    } catch (err) {
      next(err);
    }
  }

  async planDaysProccess(req, res, next) {
    try {
      let result = await this.validationData(req, res);
      if (result) return this.plan(req, res, next);
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }

  async Teachers(req, res) {
    const Teachers = await TeacherAuth.find();

    const teacherName = [];
    Teachers.forEach((el) => {
      teacherName.push(el.teacherName);
    });
    return teacherName;
  }

  async terms(req, res) {
    const terms = await Term.find();

    const termCode = [];
    terms.forEach((el) => {
      termCode.push(el.termCode);
    });
    return termCode;
  }

  async fields(req, res) {
    const fields = await Field.find();

    const fieldName = [];
    fields.forEach((el) => {
      fieldName.push(el.fieldName);
    });
    return fieldName;
  }

  async plan(req, res, next) {
    try {
      const lessons = await Lesson.findOne({ lessonName: req.body.lessonName });

      if (!lessons) {
        req.flash("errors", " نام درس مورد نظر شما اشتباه است ");
        return this.back(req, res);
      }

      const currentClass = await Class.findById(req.body.classId);

      if (!currentClass) {
        req.flash("errors", " اطلاعات ساخت کلاس وجود ندارد ");
        return this.back(req, res);
      }

      let time1 = req.body.classTime1;
      let time2 = req.body.classTime2;

      let timeR1 = time1.trim().split(":");

      let time1_1 = timeR1[0];
      let time1_2 = timeR1[1];

      let timeR2 = time2.trim().split(":");

      let time2_1 = timeR2[0];
      let time2_2 = timeR2[1];

      let s = time1_1 + time1_2;
      let e = time2_1 + time2_2;

      const newPlan = new Plan({
        // Class Document
        user: req.user._id,
        class: currentClass._id,
        className: currentClass.className,
        type: currentClass.type,
        // Plan Document
        days: req.body.days,
        classId: currentClass.classId,
        field: req.body.field,
        lessonName: req.body.lessonName,
        teacherName: req.body.teacherName,
        termCode: req.body.termCode,
        classTime1: s,
        classTime2: e,
        timeStart: req.body.classTime1,
        timeEnd: req.body.classTime2,
      });

      const plan = await Plan.find({ class: currentClass._id });

      const Interference = (s, e) => {
        var st,
          et,
          count = 0;

        plan.forEach((el) => {
          st = el.classTime1;
          et = el.classTime2;
          if (s >= st && s < et) {
            count++;
          } else if (e > st && e <= et) {
            count++;
          }
        });
        return count == 0;
      };

      let Interferences = Interference(s, e);

      if (s < 800 || s > 1900) {
        req.flash("errors", "ساعت شروع باید از 8 صبح تا 7 عصر باشد");
        return this.back(req, res);
      }

      if (e < 800 || e > 1900) {
        req.flash("errors", "ساعت پایان باید از 8 صبح تا 7 عصر باشد");
        return this.back(req, res);
      }

      if (s > e) {
        req.flash("errors", "ساعت شروع باید کوچکتر از ساعت پایان باشد");
        return this.back(req, res);
      }

      if (!Interferences) {
        req.flash("errors", "زمان مورد نظر شما تداخل دارد");
        return this.back(req, res);
      }

      try {
        await newPlan.save();
        currentClass.Reserve = true;
        await currentClass.save();
      } catch (err) {
        next(err);
      }

      req.flash("errors", " کلاس مورد نظر شما رزرو شد ");
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new classSingleController();
