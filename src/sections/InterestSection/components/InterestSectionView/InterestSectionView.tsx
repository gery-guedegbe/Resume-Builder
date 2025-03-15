import React from "react";
import { useFormContext } from "../../../../context/FormContext";
import { useGlobalContext } from "../../../../context/GlobalContext";
import FormLayout from "../../../../components/FormLayout";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import { LuGuitar } from "react-icons/lu";

const InterestSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedInterest = Array.from(userData.hobbies);
    const [removed] = reorderedInterest.splice(result.source.index, 1);
    reorderedInterest.splice(result.destination.index, 0, removed);
    setUserData((prev) => ({ ...prev, hobbies: reorderedInterest }));
  };

  const handleEditSkills = (interest: any) => {
    setEditingData(interest);
    setIsEditing((prev) => ({ ...prev, hobbies: true }));
  };

  return (
    <FormLayout title="Interests" section="hobbies" Icon={LuGuitar}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="hoobies">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex w-full flex-col items-start gap-4"
            >
              {userData.hobbies.map((hobbie, index) => (
                <Draggable
                  key={hobbie.id}
                  draggableId={hobbie.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="border-custom-grey/15 flex w-full items-center gap-3 opacity-70 hover:opacity-90"
                      onClick={() => handleEditSkills(hobbie)}
                    >
                      <RxDragHandleDots2 size={26} />

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-custom-ultra-black">
                          {hobbie.hobbie}
                        </h3>
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

export default InterestSectionView;
