import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from 'lucide-react'
// import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {/* <li><Link>Home</Link></li>
                <li><Link>Jobs</Link></li>
                <li><Link>Browser</Link></li> */}
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline">Login</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
              </div>
            ):(
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                {/* <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" /> */}
                <AvatarImage src="https://github.com/shadcn.png" />
                <Button variant="outline">Open popover</Button>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-70">
              <div className="">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    {/* <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    /> */}
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    {/* <h4 className="font-medium">{user?.fullname}</h4> */}
                    <h4 className="font-medium">User Name</h4>
                    <p className="text-sm text-muted-foreground">
                      {/* {user?.profile?.bio} */}
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {/* {user && user.role === "student" && ( */}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        View Profile
                        {/* <Link to="/profile">View Profile</Link> */}
                      </Button>
                    </div>
                  {/* )} */}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    {/* <Button onClick={logoutHandler} variant="link"> */}
                    <Button variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
