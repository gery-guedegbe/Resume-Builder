import React from "react";
import { IoEarth } from "react-icons/io5";
import FormLayout from "../../../../components/FormLayout.js";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import { useFormContext } from "../../../../context/FormContext.js";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface Language {
  id: string;
  language: string;
  level: string;
  numericValue: number;
}

interface UserData {
  languages?: Language[];
}

const LangageSectionView = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedLanguages = Array.from(userData.languages);
    const [removed] = reorderedLanguages.splice(result.source.index, 1);
    reorderedLanguages.splice(result.destination.index, 0, removed);
    setUserData((prev: UserData) => ({
      ...prev,
      languages: reorderedLanguages,
    }));
  };

  const handleEditLanguages = (languages: Language) => {
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
              {userData.languages.map((lang: Language, index: number) => (
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
