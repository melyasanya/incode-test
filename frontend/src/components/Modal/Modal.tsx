import type {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {Input} from '../Input/Input';
import {boards} from '../../constants/boards';
import {Inputs} from '../../constants/interface';

interface Props {
  title?: string;
  description?: string;
  edit?: boolean;
  status?: string;
  onClick: () => void;
  onSubmit: SubmitHandler<Inputs>;
}

export const Modal: FC<Props> = ({
  onClick,
  onSubmit,
  title,
  description,
  edit,
  status,
}) => {
  const {register, handleSubmit} = useForm<Inputs>({
    defaultValues: {title, description, status},
  });

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
                {edit && (
                  <select
                    {...register('status', {required: true})}
                    className="border p-2 rounded"
                  >
                    {boards.map((board) => (
                      <option key={board.id} value={board.id}>
                        {board.name}
                      </option>
                    ))}
                  </select>
                )}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
