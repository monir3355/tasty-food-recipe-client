import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-16">
      <div className="max-w-[1400px] mx-auto grid gap-8 md:grid-cols-4 md:px-0 px-4">
        <div className="space-y-3">
          <Link to="/">
            <img className="h-12" src="/images/logo.png" alt="" />
          </Link>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <p>
            <Link>
              <img className="h-6" src="/images/Icons/Group 9969.png" alt="" />
            </Link>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <Link>Facebook</Link>
          <br />
          <Link>Twitter</Link>
          <br />
          <Link>Linkedin</Link>
          <br />
          <Link>Instragram</Link>
          <br />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Cooking Category</h4>
          <Link>Chicken bog</Link>
          <br />
          <Link>Glorified rice</Link>
          <br />
          <Link>Cheesesteak</Link>
          <br />
          <Link>Rice and gravy</Link>
          <br />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p>
            524 Broadway , NYC <br /> +1 777 - 978 - 5570
          </p>
        </div>
      </div>
      <hr className="container mx-auto mt-4" />
      <div className="md:flex justify-between container mx-auto my-4 md:px-0 px-4">
        <p>&copy; 2023 Tasty Food. All Rights Reserved</p>
        <p>Powered by Tasty Food</p>
      </div>
    </footer>
  );
};

export default Footer;
