import {BsGithub} from "react-icons/bs";
import {FiEye} from "react-icons/fi";
import {Link} from "react-router-dom";

const AllProjectCard = ({project}) => {
    return (
        <li className="mb-12">
            <Link to={project?.demo} target={"_blank"}
                className="group cursor-pointer relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100">
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                        <span>{project?.title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-300">{project.description}</p>
                    <ul className="mt-2 flex flex-wrap">
                        {project.skills.map(skill=><li key={skill} className="mr-1.5 mt-2">
                            <div
                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}
                            </div>
                        </li>)}
                    </ul>
                </div>
                <img alt="img" loading="lazy"
                     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                     src={project.image}
                /></Link>
        </li>
    )
}
export default AllProjectCard