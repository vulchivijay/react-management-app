import Button from "./Button";

export default function Sidebar({ addproject, showProjects }) {
  return (
    <aside className='w-1/3 px-4 py-8 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='font-bold mb-8 uppercasemd:text-xl text-stone-200 uppercase'>Your Projects</h2>
      <div>
        <Button onClick={addproject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {showProjects && showProjects.project.map((project, index) => {
          return <li key={index} className="my-1">
            <button className="w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-tone-800">{project.title}</button>
          </li>
        })}
      </ul>
    </aside>
  )
}