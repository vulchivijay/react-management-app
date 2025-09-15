import Logo from './../assets/no-projects.png'
import Button from './Button'

export default function NoProjects({ createProject }) {
  return (
    <div className="w-[25rem] mt-16 flex flex-col items-center">
      <img src={Logo} alt="logo" width={50} height={50} />
      <h2 className='mb-2 text-stone-500'>No project selected</h2>
      <p className='mb-6 text-stone-400'>Selected a project or get started with a new project</p>
      <div>
        <Button onClick={createProject}>Create new project</Button>
      </div>
    </div>
  )
}