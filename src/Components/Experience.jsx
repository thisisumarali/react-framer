import { EXPERIENCES } from "../constants";
import H2 from "./H2";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <H2>Experience</H2>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div className="mb-8  flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
