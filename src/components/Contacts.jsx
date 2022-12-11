import "./Contacts.css";
import { useForm } from "react-hook-form";
import { FaEnvelopeOpen } from "react-icons/fa";

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  console.log("hello world");
  const onSubmit = () => {};
  return (
    <div className="chat-form">
      <div className="chat-left">
        <h3>Let's chat.</h3>
        <div className="chat-text">
          <p>Tell me about your project</p>
          <p>Lets create something together</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="formbox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-name-email">
            <div className="field-tabs">
              <p>Name</p>
              <input
                className="field field1 "
                type="text"
                placeholder="Full Name..."
                {...register("fullName")}
              />
            </div>
            <div className="field-tabs">
              <p>Email</p>
              <input
                className="field field1 "
                type="email"
                placeholder="Email..."
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <div className="field-tabs">
              <p>Message</p>
              <input
                className="field field2"
                type="message"
                placeholder="Hey there..."
                {...register("Message")}
              />
            </div>
          </div>
          <div>
            <button className="fieldsubmit">
              <FaEnvelopeOpen size="1rem" color="white" />
              <input className=" submitbtn" type="submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
