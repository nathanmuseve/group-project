
export default function Contact() {
  return (
    <div>
      <div className="relative">

        <div>
          <h1 className="font-bold text-center text-2xl">Contact us</h1>
          <br></br>
          <p className="text-center">With lots of unique bloacks, you can easily build a page without coding. Build your unique consultancy website within few minutes</p>
        </div>
        <br></br>
        <br></br>
        <div className="flex flex-row  gap-6  ">
          <div className="border-2 rounded-sm">
            <h2 className="font-bold px-4">Call us</h2>
            <p className="px-1">+47 939 48 451</p>
            <p className="px-1">+47 939 48 451</p>
          </div>
          <div className="border-2 rounded-sm p ">
            <h2 className="font-bold px-9">Email us</h2>
            <p className="px-1">info@consultancy.com</p>
            <p className="px-1">info@consultancy.com</p>
          </div>
          <div className="border-2 rounded-sm">
            <h2 className="font-bold px-20">Visit us</h2>
            <p className="px-1">Sydheyvevein 3284,
              Holmestrand, Norway
            </p>
          </div>
          <div className="">
            <h2 className="font-bold p-3">CEO</h2>
            <p className="px-3 py-2">34 Madison Street,
              NY, USA 10005
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <form className="flex border-2 rounded-sm absolute  left-0 gap-9 p-3">
          <div>
            <div>
              <label htmlFor="firstName" className="font-bold">First & Last Name</label>
              <br></br>
              <input id="firstName" type="text" placeholder="i.e John Doe" className="border-2 "></input>
            </div>
            <br></br>
            <div>
              <label htmlFor="phone number" className="font-bold">Phone Number</label>
              <br></br>
              <input id="phone number" type="number" placeholder="i.e 123456789" className="border-2"></input>
            </div>
            <br></br>
            <div>
              <label htmlFor="message" className="font-bold">Message</label>
              <br></br>
              <textarea id="message" placeholder="" className="border-2 p-3"></textarea>
            </div>
            <button type="submit" className="bg-blue-800 text-white py-1 px-2">Send </button>
          </div>
          <div>
            <div>
              <label htmlFor="email" className="font-bold">Email</label>
              <br></br>
              <input id="email" type="text" placeholder="i.e john@gmail.com" className="border-2"></input>
            </div>
            <br></br>
            <div>
              <label htmlFor="subject" className="font-bold">Subject</label>
              <br></br>
              <input id="Subject" type="text" placeholder="i.e I need help" className="border-2"></input>
            </div>
          </div>
        </form>

      </div>

    </div>
  )
}
