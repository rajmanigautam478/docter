import React, { useState, useContext, useRef } from "react";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const { aToken, fetchAllDoctors } = useContext(AdminContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [docImg, setDocImg] = useState(null);
  const [docImgUrl, setDocImgUrl] = useState(null);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [education, setEducation] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocImg(file);
      setDocImgUrl(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Doctor image is required");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("education", education);
      formData.append("address", JSON.stringify({ line1: address1, line2: address2 })); // In backend currently string, let's keep it simple string or adapt
      
      // Based on existing backend controller, address is a string. So let's combine it.
      formData.set("address", `${address1}, ${address2}`);

      const { data } = await api.post("/admin/add-doctor", formData, {
        headers: {
          atoken: aToken,
          "Content-Type": "multipart/form-data"
        }
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setDocImgUrl(null);
        setName("");
        setEmail("");
        setPassword("");
        setAddress1("");
        setAddress2("");
        setEducation("");
        setAbout("");
        setFees("");
        fetchAllDoctors();
        navigate("/admin/all-doctors");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding doctor");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Doctor</h2>

      <form onSubmit={onSubmitHandler} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Upload Doctor Picture */}
        <div className="flex items-center gap-5 mb-8">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-20 h-20 rounded-full bg-indigo-50 border-2 border-dashed border-indigo-200 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-indigo-100 transition-colors group"
          >
            {docImgUrl ? (
              <img src={docImgUrl} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-indigo-400 text-3xl group-hover:scale-110 transition-transform">📷</span>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
          <div>
            <p className="text-gray-800 font-bold">Upload doctor picture</p>
            <p className="text-xs text-gray-500 mt-1">Recommended: Square image, max 2MB</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          {/* Doctor Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Doctor Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Dr. John Doe"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Speciality */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Speciality</label>
            <select 
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@example.com"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Education</label>
            <input
              type="text"
              required
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="e.g. MBBS, MD"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Secure password"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
            <select 
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="4 Years">4 Years</option>
              <option value="5+ Years">5+ Years</option>
              <option value="10+ Years">10+ Years</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Clinic/Hospital Address</label>
            <div className="space-y-3">
              <input
                type="text"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Street Address, Area"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="City, State, Zip (Optional)"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Fees */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Consultation Fees ($)</label>
            <input
              type="number"
              required
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="e.g. 50"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">About Doctor</label>
            <textarea
              required
              rows="4"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Write a brief professional summary..."
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <hr className="my-8 border-gray-100" />

        {/* Button */}
        <div className="flex justify-end">
          <button 
            type="submit"
            className="px-10 py-3.5 bg-indigo-600 text-white font-bold rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Save Doctor Profile
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddDoctor;