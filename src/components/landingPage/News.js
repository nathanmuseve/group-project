export default function News({image, title,par}){
  return (
      <div>
      <div className="bg-gray-50 w-44 h-60 shadow-lg rounded-lg ">
      <img className="rounded-t-lg"src={image} alt="news help" />
      <h2 className="text-slate-500 p-2">{title}</h2>
      <p className="font-bold font-sans p-3 text-sm text-slate-700">{par}</p>
      </div>
      </div>
  )
}