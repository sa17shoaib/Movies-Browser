import Hero from "./Hero";

const Contact = () => {
  return (
    <>
      <Hero text="Contact Us" />
      <form className="mx-auto my-5" style={{ width: "500px" }}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@email.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Barry Allen"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Describe your issue in detail
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="For e.g., Unable to view details"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
