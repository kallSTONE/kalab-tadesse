// import SectionTitle from '../ui/SectionTitle';
// import { skills } from '../../data/portfolio';

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 border-t border-border">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <SectionTitle
//           title="Skills & Technologies"
//           subtitle="Tools and technologies I work with regularly"
//         />

//         <div className="grid md:grid-cols-3 gap-8">
//           {skills.map((skillGroup) => (
//             <div key={skillGroup.category} className="space-y-4">
//               <h3 className="text-lg font-semibold text-primary">
//                 {skillGroup.category}
//               </h3>
//               <ul className="space-y-3">
//                 {skillGroup.items.map((skill) => (
//                   <li
//                     key={skill}
//                     className="text-text-secondary hover:text-text-primary transition-colors"
//                   >
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with regularly"
        />

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 text-lg font-semibold text-primary">
                {group.category}
              </h3>

              <ul className="grid grid-cols-3 items-center md:grid-cols-2 gap-4">
                {group.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border
                               text-text-secondary hover:text-text-primary
                               hover:border-primary/40 hover:bg-primary/5
                               transition-all"
                  >
                    <Icon className="text-xl group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium hidden md:block">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
