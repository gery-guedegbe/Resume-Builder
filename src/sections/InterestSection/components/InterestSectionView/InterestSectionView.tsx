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
import { LuGuitar } from "react-icons/lu";

interface Hobbie {
  id: string;
  hobbie: string;
}

interface UserData {
  hobbies: Hobbie[];
}

const InterestSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedInterest = Array.from(userData.hobbies);
    const [removed] = reorderedInterest.splice(result.source.index, 1);
    reorderedInterest.splice(result.destination.index, 0, removed);
    setUserData((prev: UserData) => ({ ...prev, hobbies: reorderedInterest }));
  };

  const handleEditSkills = (interest: Hobbie) => {
    setEditingData(interest);
    setIsEditing((prev: Record<string, boolean>) => ({
      ...prev,
      hobbies: true,
    }));
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
              {userData.hobbies.map((hobbie: Hobbie, index: number) => (
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
                      className="flex w-full items-center gap-3 border-custom-grey/15 opacity-70 hover:opacity-90"
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
