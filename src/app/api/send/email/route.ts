import nodemailer from 'nodemailer';
export async function POST(req:Request) {
    const {email,subject,message} =  await req.json();
    const {NODE_MAILER_SERVICE_TYPE,NODE_MAILER_USER ,NODE_MAILER_PASSWORD} = process.env;
    const transporter = nodemailer.createTransport({
        service: NODE_MAILER_SERVICE_TYPE,
        auth: {
            user: NODE_MAILER_USER,
            pass: NODE_MAILER_PASSWORD,
        }
    });
    const info = await transporter.sendMail({
        from: NODE_MAILER_USER,
        to: email, // list of receivers
        subject, // Subject line
        text: message, // plain text body
    });
    console.log(info)
    return Response.json({info});
}