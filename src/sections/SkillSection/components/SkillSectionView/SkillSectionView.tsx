import React from "react";
import { useFormContext } from "../../../../context/FormContext.js";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import FormLayout from "../../../../components/FormLayout.js";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import { LuBrain } from "react-icons/lu";

interface Skill {
  id: string;
  skill: string;
  level: string;
  numericValue: number;
}

interface UserData {
  skills?: Skill[];
}

const SkillSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedSkill = Array.from(userData.skills);
    const [removed] = reorderedSkill.splice(result.source.index, 1);
    reorderedSkill.splice(result.destination.index, 0, removed);
    setUserData((prev: UserData) => ({ ...prev, skills: reorderedSkill }));
  };

  const handleEditSkills = (skill: Skill) => {
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
              {userData.skills.map((skill: Skill, index: number) => (
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
                      className="flex w-full items-center gap-3 border-custom-grey/15 opacity-70 hover:opacity-90"
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
