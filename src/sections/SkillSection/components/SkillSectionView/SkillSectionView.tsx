import React from "react";
import { useFormContext } from "../../../../context/FormContext";
import { useGlobalContext } from "../../../../context/GlobalContext";
import FormLayout from "../../../../components/FormLayout";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import { LuBrain } from "react-icons/lu";

const SkillSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedSkill = Array.from(userData.skills);
    const [removed] = reorderedSkill.splice(result.source.index, 1);
    reorderedSkill.splice(result.destination.index, 0, removed);
    setUserData((prev) => ({ ...prev, skills: reorderedSkill }));
  };

  const handleEditSkills = (skill: any) => {
    setEditingData(skill);
    setIsEditing((prev) => ({ ...prev, skills: true }));
  };

  return (
    <FormLayout title="Skills" section="skills" Icon={LuBrain}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="skills">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex w-full flex-col items-start gap-4"
            >
              {userData.skills.map((skill, index) => (
                <Draggable
                  key={skill.id}
                  draggableId={skill.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="border-custom-grey/15 flex w-full items-center gap-3 opacity-70 hover:opacity-90"
                      onClick={() => handleEditSkills(skill)}
                    >
                      <RxDragHandleDots2 size={26} />

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-custom-ultra-black">
                          {skill.skill}
                        </h3>

                        <p className="space-x-2 text-xs">{skill.level}</p>
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

export default SkillSectionView;
