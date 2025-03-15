import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import FormLayout from "../../../../components/FormLayout";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { useFormContext } from "../../../../context/FormContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const EducationSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedEducation = Array.from(userData.education);
    const [removed] = reorderedEducation.splice(result.source.index, 1);
    reorderedEducation.splice(result.destination.index, 0, removed);
    setUserData((prev) => ({ ...prev, education: reorderedEducation }));
  };

  const handleEditEducation = (education: any) => {
    setEditingData(education);
    setIsEditing((prev) => ({ ...prev, education: true }));
  };

  return (
    <FormLayout
      title="Education"
      section="education"
      Icon={RiGraduationCapLine}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="experience">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex w-full flex-col items-start gap-4"
            >
              {userData.education.map((edu, index) => (
                <Draggable
                  key={edu.id}
                  draggableId={edu.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="border-custom-grey/15 flex w-full items-center gap-3 opacity-70 hover:opacity-90"
                      onClick={() => handleEditEducation(edu)}
                    >
                      <RxDragHandleDots2 size={26} />

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-custom-ultra-black">
                          {edu.degree},
                          <span className="ml-0.5 font-normal italic">
                            {edu.institution}
                          </span>
                        </h3>

                        <p className="space-x-2 text-xs">
                          {edu.startDate} -
                          <span className="mr-1.5">
                            {edu.endDate || "Present"}
                          </span>
                          |<span className="ml-1.5">{edu.location}</span>
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

export default EducationSectionView;
