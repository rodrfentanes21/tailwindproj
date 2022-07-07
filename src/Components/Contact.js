import EmailIcon from '@material-ui/icons/Email.js';
import CallIcon from '@material-ui/icons/Call.js';


function Contact() {
  return (
    <div className="flex-col text-center items-center justify-between text-3xl h-[20%] pt-5 pb-5">
      <div className="flex-col gap-5">
        <div className="mt-2 text-xl text-slate-400">
          Any doubts or issues regarding your order? You can contact us
          through the following means:
        </div>
        <div className="flex-col space-x-4 text-xl text-slate-700 mt-5">
          <a href="mailto:fentanesrodrigo@gmail.com" className='hover:text-blue-800'><EmailIcon /></a>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer" className='hover:text-blue-800'><CallIcon></CallIcon></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
