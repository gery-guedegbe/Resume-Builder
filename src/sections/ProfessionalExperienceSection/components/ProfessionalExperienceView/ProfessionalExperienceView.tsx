import React from "react";
import FormLayout from "../../../../components/FormLayout";
import { MdWorkOutline } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { useFormContext } from "../../../../context/FormContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ProfessionalExperienceView: React.FC = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedExperiences = Array.from(userData.experience);
    const [removed] = reorderedExperiences.splice(result.source.index, 1);
    reorderedExperiences.splice(result.destination.index, 0, removed);
    setUserData((prev) => ({ ...prev, experiences: reorderedExperiences }));
  };

  const handleEditExperience = (experience: any) => {
    setEditingData(experience);
    setIsEditing((prev) => ({ ...prev, experience: true }));
  };

  return (
    <FormLayout
      title="Professional Experience"
      section="experience"
      Icon={MdWorkOutline}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="experience">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex w-full flex-col items-start gap-4"
            >
              {userData.experience.map((exp, index) => (
                <Draggable
                  key={exp.id}
                  draggableId={exp.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="flex w-full items-center gap-3 border-custom-grey/15 opacity-70 hover:opacity-90"
                      onClick={() => handleEditExperience(exp)}
                    >
                      <RxDragHandleDots2 size={26} />

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-custom-ultra-black">
                          {exp.jobTitle},
                          <span className="ml-0.5 font-normal italic">
                            {exp.company}
                          </span>
                        </h3>

                        <p className="text-xs">
                          {exp.startDate} - {exp.endDate || "Present"}
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </FormLayout>
  );
};

export default ProfessionalExperienceView;
