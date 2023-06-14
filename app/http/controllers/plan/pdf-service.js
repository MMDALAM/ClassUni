const PDFDocument = require("../teacher/pdf/service/pdfkit-tables");
const Plan = require('app/models/plan');

async function buildPDFSaturday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days: "شنبه" }).sort({ classId: 1 }).sort({ field: 1 }).sort({ classTime1: 1 }).sort({ termCode: 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
    
}

async function buildPDFSunday(dataCallback, endCallback) {
    // Load the patients 

        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : "یک شنبه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

    const table = {
        headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
        rows: []
    };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

async function buildPDFFriday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : "جمعه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

async function buildPDFMonday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : 'دو شنبه' }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

async function buildPDFThursday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : "پنج شنبه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

async function buildPDFTuesday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : "سه شنبه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

async function buildPDFWednesday(dataCallback, endCallback) {
    // Load the patients 
    
        const doc = new PDFDocument();

        doc.on('data', dataCallback);
        doc.on('end', endCallback);

    doc
        .font('fonts/iransansdn.ttf')
        .fillColor("#444444")
        .fontSize(30)
        .text(" روزانه برنامه ", 25, 10, { align: "right" })
        .fontSize(15)
        .text(" مهندسی و فنی دانشکده ", 50, 20)
        .moveDown();
    

    const reps = await Plan.find({ days : "چهارشنبه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const table = {
            headers: [" ترم "," پایان ساعت "," شروع ساعت","نوع"," درس نام "," استاد نام "," رشته " ," نام کلاس "," کلاس کد ", " هفته های روز "],
            rows: []
        };
    
        // Add the patients to the table
        for (const rep of reps) {
            table.rows.push([rep.termCode,rep.timeEnd,rep.timeStart,rep.type,rep.lessonName,rep.teacherName , rep.field,rep.className,rep.classId,rep.days]);
        }
    // Draw the table
    doc.moveDown()
        .table(table, 10, 80, { width: 600 });

    // Finalize the PDF and end the stream
    doc.end();
}

module.exports = { buildPDFSaturday , buildPDFSunday , buildPDFFriday ,buildPDFMonday , buildPDFThursday , buildPDFTuesday , buildPDFWednesday};