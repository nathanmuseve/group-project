
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, } from "@fortawesome/free-regular-svg-icons"
export default function Forms() {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-full relative" src="https://media.istockphoto.com/id/533326346/photo/living-working-and-playing-under-one-roof.jpg?s=612x612&w=0&k=20&c=W-cEVNHgXr3D_mkXhbG0H0w1rACsgE_OM6yKF3_3wz4=" alt="" />

        <p className="absolute m-8 top-1 text-white text-center w-12 h-12 bg-teal-400 px-3 py-3 rounded-full" > <FontAwesomeIcon icon={faComment}  /></p>

        <div className=" flex gap-6 m-8 absolute top-10 ">
        <div className="">
          <h1 className="text-slate-50 font-bold  p-3">Get a free consultancy from our expert right now!</h1>

          <p className="text-slate-300 text-sm p-4">With lots of uniques Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <form action="" className="bg-gray-50 p-4 rounded-md w-80 ">
          <div className="font-bold text-sm">
            <label htmlFor="name">Name</label>
            <input className="border-2 p-1 rounded-md placeholder:text-slate-300 placeholder:text-sm outline-none border-teal-400 w-full" type="text" id="name" placeholder="i.e Nathan Museve" required />
          </div>

          <div className="">
            <label htmlFor="email" className="font-bold text-sm">Email</label>
            <input className="border-2 p-1 rounded-md placeholder:text-slate-300 placeholder:text-sm outline-none border-teal-400 w-full" type="email" id="email" placeholder="i.e nathanm@gmail.com" required />
          </div>

          <div className="">
            <label htmlFor="phone" className="font-bold text-sm">Phone</label>
            <input className="border-2 p-1 rounded-md placeholder:text-slate-300 placeholder:text-sm outline-none border-teal-400 w-full" type="tel" id="phone"  placeholder="i.e 0790722379" required />
          </div>

          <div className="">
            <label htmlFor="subject" className="font-bold text-sm">Which services do you need?</label>
            <select  className="border-2 p-1 rounded-md placeholder:text-slate-300 placeholder:text-sm outline-none border-teal-400 w-full" name="subject" id="subject">
              <option value="">select a service</option>

              <option value="Web Development">Web Development</option>

              <option value="Data Science">Data Science</option>

              <option value="Data Engineering">Data Engineering</option>

              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>
          <button  className="border-2 py-2 mt-3 rounded-md text-sm bg-teal-400 w-full" type="submit">Get Free Consultancy</button>
        </form>
        </div>
      </div>

    </div>
  )
}
