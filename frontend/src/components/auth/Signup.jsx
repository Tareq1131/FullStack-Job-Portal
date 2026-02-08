import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <from action>
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" name="fullname" placeholder="patel" />
          </div>
        </from>
      </div>
    </div>
  );
};

export default Signup;
