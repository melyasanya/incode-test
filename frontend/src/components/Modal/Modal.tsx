import type {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Input} from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {selectBoard} from '../../redux/selectors';
import {createCard} from '../../redux/thunk';
import {AppDispatch} from '../../redux/store';

interface Props {
  onClick: () => void;
  tableId: string;
}

export interface Inputs {
  title: string;
  description: string;
}

export const Modal: FC<Props> = ({onClick, tableId}) => {
  const {register, handleSubmit} = useForm<Inputs>();
  const board = useSelector(selectBoard);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {title, description} = data;
    const newTask = {
      title,
      description,
      status: tableId,
      id: board?._id,
    };
    dispatch(createCard(newTask));
    onClick();
  };

  return (
    <div className="fixed inset-0 z-50 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className=" max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <div className="mb-8">
              <p className="text-left z-100" onClick={onClick}>
                Close Modal
              </p>
            </div>
            <div className="space-y-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[16px]"
              >
                <Input
                  register={register('title', {
                    required: true,
                  })}
                  text="Title"
                />
                <Input
                  register={register('description', {
                    required: true,
                  })}
                  text="Description"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
