//import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Contact Me</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>farooqrukhbaiz@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Srinagar J&K, India</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+919596633408</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
