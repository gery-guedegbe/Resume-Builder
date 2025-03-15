import React from "react";
import { IoEarth } from "react-icons/io5";
import FormLayout from "../../../../components/FormLayout";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { useFormContext } from "../../../../context/FormContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const LangageSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedLanguages = Array.from(userData.languages);
    const [removed] = reorderedLanguages.splice(result.source.index, 1);
    reorderedLanguages.splice(result.destination.index, 0, removed);
    setUserData((prev) => ({ ...prev, languages: reorderedLanguages }));
  };

  const handleEditLanguages = (languages: any) => {
    setEditingData(languages);
    setIsEditing((prev) => ({ ...prev, languages: true }));
  };

  return (
    <FormLayout title="Languages" section="languages" Icon={IoEarth}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="languages">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex w-full flex-col items-start gap-4"
            >
              {userData.languages.map((lang, index) => (
                <Draggable
                  key={lang.id}
                  draggableId={lang.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="flex w-full items-center gap-3 border-custom-grey/15 opacity-70 hover:opacity-90"
                      onClick={() => handleEditLanguages(lang)}
                    >
                      <RxDragHandleDots2 size={26} />

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-custom-ultra-black">
                          {lang.language}
                        </h3>

                        <p className="space-x-2 text-xs">{lang.level}</p>
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

export default LangageSectionView;
