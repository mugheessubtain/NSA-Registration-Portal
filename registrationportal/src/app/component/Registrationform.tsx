"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "react-toastify";
import { supabase } from "../../../utils/supabaseClient"

export default function Form() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [batch, setBatch] = useState("");
    const [contact, setContact] = useState("");
    const [selectedDomains, setSelectedDomains] = useState<string[]>([]); // Array for selected domains
    const [sport, setSport] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [society, setSociety] = useState("");
    const route=useRouter();

    const validateFields = () => {
        if (!userName || !email || !rollNo || !department || !batch || !contact || !society || !sport || selectedDomains.length === 0) {
            toast.error("Please fill in all fields.");
            return false;
        }
        if (!/^[A-Za-z\s]+$/.test(userName)) {
            toast.error("Please enter a valid name.");
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }
        if (!/^\d{11}$/.test(contact)) {
            toast.error("Phone number must be exactly 11 digits.");
            return false;
        }
        return true;
    };
    const resetInput = () => {
        setUserName("");
        setEmail("");
        setRollNo("");
        setDepartment("");
        setBatch("");
        setContact("");
        setSociety("");
        setSelectedDomains([]);
        setSport("");
    };

    const allData = async () => {
        if (!validateFields()) return;
      
        const data = {
          userName,
          email,
          rollNo,
          department,
          batch,
          contact,
          society,
          selectedDomains, 
          sport,
        };
      
        try {
          const { error } = await supabase.from("participant").insert([data]);
      
          if (error) {
            console.error("Supabase Error:", error.message);
            toast.error("There was an error submitting the form. Please try again.");
            return;
          }
      
        
          route.push("/completeRegistration");
          resetInput();
          toast.success("Thanks for registering!");
      
        } catch (error) {
          console.error("Unexpected Error:", error);
          toast.error("An unexpected error occurred.");
        }
      };
    const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedDomains((prev) => {
            if (prev.includes(value)) {
                return prev.filter(domain => domain !== value); // Remove if already selected
            } else {
                return [...prev, value]; // Add if not selected
            }
        });
    };

    return (
        <div className="relative flex flex-col p-7 xl:p-10 gap-5 mb-14">
            <h1 className="text-2xl font-bold text-center">Registration</h1>


            <div className="flex gap-5 justify-center flex-col md:flex-row">
                <div className="shadow-2xl xl:w-[550px] w-full rounded-lg border-slate-100 border-2">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="Name">
                                <span className="label-text font-semibold text-[15px]">Name:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-primary w-full"
                                id="Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="email">
                                <span className="label-text font-semibold text-[15px]">Email:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered input-primary w-full"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br />


                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="Roll Number">
                                <span className="label-text font-semibold text-[15px]">Roll Number:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Roll Number"
                                className="input input-bordered input-primary w-full"
                                id="rollNo"
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="department">
                                <span className="label-text font-semibold text-[15px]">Department:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Department"
                                className="input input-bordered input-primary w-full"
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </div>
                        <br />


                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="Contact Number">
                                <span className="label-text font-semibold text-[15px]">Contact Number:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="input input-bordered input-primary w-full"
                                id="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <br />


                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="batch">
                                <span className="label-text font-semibold text-[15px]">Batch</span>
                            </label>
                            <select
                                className="w-full input input-bordered input-primary rounded-lg"
                                id="batch"
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                            >
                                <option>Select your Batch</option>
                                <option value={"2021"}>2021</option>
                                <option value={"2022"}>2022</option>
                                <option value={"2023"}>2023</option>
                                <option value={"2024"}>2024</option>
                            </select>
                        </div>
                        <br />


                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="sport">
                                <span className="label-text font-semibold text-[15px]">Enter your Soceity Name</span>
                            </label>
                            <select
                                className="w-full input input-bordered input-primary rounded-lg"
                                id="sport"
                                value={society}
                                onChange={(e) => setSociety(e.target.value)}
                            >
                                <option>Select your Soceity</option>
                                <option value={"NSA– NED SMS Alert Society"}>NSA– NED SMS Alert Society</option>
                                <option value={"NGS – NED Green Society"}>NGS – NED Green Society</option>
                                <option value={"NDS – NED Debating Society"}>NDS – NED Debating Society</option>
                                <option value={"SENTEC - Society for Promotion of Science, Engineering & Technology"}>SENTEC - Society for Promotion of Science, Engineering & Technology</option>
                                <option value={"MOSAIC - Members of the Society of Artistic and Intellectual Creativity"}>MOSAIC - Members of the Society of Artistic and Intellectual Creativity</option>
                                <option value={"LPS - Literary and Publications Society"}>LPS - Literary and Publications Society</option>
                                <option value={"PSN - Pakistan Society NED"}>PSN - Pakistan Society NED</option>
                                <option value={"NGS – NED Girls Society"}>NGS – NED Girls Society</option>
                                <option value={"TNF – The NEDians Forum Society"}>TNF – The NEDians Forum Society</option>
                                <option value={"NPS - NED Photography Society"}>NPS - NED Photography Society</option>
                            </select>
                        </div>
                        <br />


                        <div className="flex max-w-md flex-col gap-4">
                            <label className="flex items-center gap-2">
                                <span className="label-text font-semibold text-[15px]">Which Domain do you Belong?</span>
                            </label>
                            <div className="flex flex-col">
                                {[
                                    "Event Management",
                                    "Public Relations",
                                    "Human Resources",
                                    "Information Technology",
                                    "Graphics",
                                    "News",
                                    "Photography",
                                    "Filmmaking",
                                    "NKB",
                                    "Marketing",
                                    "Reels",
                                    "Documentations",
                                    "Creativity",
                                    "Promotions"
                                ].map((domain) => (
                                    <label key={domain} className="flex">
                                        <input
                                            type="checkbox"
                                            value={domain}
                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                            onChange={handleCheckboxChange}
                                        />
                                        {domain}
                                    </label>
                                ))}
                                <br />
                            </div>
                        </div>
                       
                        <br />


                        <div className="form-control">
                            <label className="label cursor-pointer" htmlFor="sport">
                                <span className="label-text font-semibold text-[15px]">In which sport you want to participate?</span>
                            </label>
                            <select
                                className="w-full input input-bordered input-primary rounded-lg"
                                id="sport"
                                value={sport}
                                onChange={(e) => setSport(e.target.value)}
                            >
                                <option>Select your sport</option>
                                <option value={"Foot Ball"}>Foot Ball</option>
                                <option value={"Volley Ball"}>Volley Ball</option>
                                <option value={"Cricket"}>Cricket</option>
                                <option value={"Badminton"}>Badminton</option>
                                <option value={"Relay Race"}>Relay Race</option>
                                <option value={"100M sprint"}>100M sprint</option>
                                <option value={"Table Tennis"}>Table Tennis</option>
                                <option value={"Arm wrestling"}>Arm wrestling</option>
                                <option value={"Tug of war"}>Tug of war</option>
                                <option value={"Chess"}>Chess</option>
                            </select>
                        </div>
                        <br />


                        <div className="mt-3">
                            <button type="button" className="btn btn-primary w-full" onClick={allData}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}  