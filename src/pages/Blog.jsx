import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <h2 className="text-6xl font-semibold text-center pt-6 pb-20 bg-base-300">
        Blog Page
      </h2>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mt-16">
          <button className="btn btn-primary">
            <Pdf targetRef={ref} filename="questions.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
            </Pdf>
          </button>
        </div>
        <div ref={ref} className="py-8">
          <h2 className="pt-8 pb-12 text-5xl font-semibold">
            Questions And Answers for React :{" "}
          </h2>
          <div className="pb-4">
            <h3 className="text-2xl font-semibold pb-2">
              Tell us the differences between uncontrolled and controlled
              components.?
            </h3>
            <p>
              Controlled components in React are those in which form data is
              handled by the component’s state. Forms are used to store
              information in a document section. The information from this form
              is typically sent to a server to perform an action. This data is
              held by form input elements and control elements, such as input,
              select, textarea, etc., which maintain and control their states or
              values.
            </p>
            <p>
              Uncontrolled components are those for which the form data is
              handled by the DOM itself. “Uncontrolled” refers to the fact that
              these components are not controlled by React state. The values of
              the form elements are traditionally controlled by and stored on
              the DOM. We will have to refer to the instance of the form
              elements to retrieve their values from the DOM.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-semibold pb-2">
              How to validate React props using PropTypes?
            </h3>
            <p>
              App.propTypes is used for props validation. If some of the props
              aren't using the correct type that we assigned, we will get a
              console warning. After we specify validation patterns, we will set
              App.defaultProps.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-semibold pb-2">
              Tell us the difference between nodejs and express js?
            </h3>
            <p>
              NodeJS is a framework of JavaScript which is mainly used for
              working with the backend of our application or building the
              backend using JavaScript. And ExpressJS is used to develop
              complete web applications such as single-page, multi-page, and
              hybrid web applications and APIs.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-semibold pb-2">
              What is a custom hook, and why will you create a custom hook?
            </h3>
            <p>
              ReactJS custom hook is JavaScript function whose name starts with
              'use' + Others name. it's create because It can be reused easily.
              That's it makes code cleaner and reduces the time to write code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
