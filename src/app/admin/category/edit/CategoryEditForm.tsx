"use client"

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import JustValidate from 'just-validate';

registerPlugin(FilePondPluginImagePreview);

export const CategoryEditForm = () => {
  const [files, setFiles] = useState([]);
  const filesRef = useRef(files);

  useEffect(() => {
    filesRef.current = files;
  }, [files]);

  useEffect(() => {
    const validation = new JustValidate('#category-edit-form');

    validation
      .addField('#name', [
        { rule: 'required', errorMessage: 'Tên bắt buộc!' },
      ])
      .addField('#category', [
        { rule: 'required', errorMessage: 'Danh mục bắt buộc!' },
      ])
      .onSuccess((event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const category = event.target.category.value;
        const position = event.target.position.value;
        const status = event.target.status.value;
        const description = event.target.description.value;

        let avatar = null;
        if (filesRef.current.length > 0) {
          avatar = filesRef.current[0].file;
        }

        console.log(name);
        console.log(category);
        console.log(position);
        console.log(status);
        console.log(avatar);
        console.log(description);
      });
  }, []);

  return (
    <>
      <form
        id="category-edit-form"
        className="bg-white border-[0.3px] border-[#B9B9B9] rounded-[14px] p-[20px] sm:p-[50px]"
      >
        <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] w-full mb-[15px] sm:mb-[30px]">
          <div className="w-full sm:w-[48%] mb-0">
            <label htmlFor='name' className="text-[14px] font-[600px] text-dark mb-[11px] block">Tên danh mục</label>
            <input
              type="text"
              className="w-full py-[18px] px-[23px] text-[14px] font-[500] outline-none bg-[#F5F6FA] rounded-[4px] border-[0.6px] border-[#D5D5D5]"
              id='name'
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <label htmlFor='category' className="text-[14px] font-[600px] text-dark mb-[11px] block">Danh mục cha</label>
            <select
              className="block w-full py-[18px] px-[23px] text-[14px] font-[500] outline-none bg-[#F5F6FA] rounded-[4px] border-[0.6px] border-[#D5D5D5]"
              id='category'
            >
              <option value="">-- Chọn danh mục --</option>
              <option value="1">Danh mục 1</option>
              <option value="2">Danh mục 2</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] w-full mb-[15px] sm:mb-[30px]">
          <div className="w-full sm:w-[48%]">
            <label htmlFor='position' className="text-[14px] font-[600px] text-dark mb-[11px] block">Vị trí</label>
            <input
              type="number"
              className="w-full py-[18px] px-[23px] text-[14px] font-[500] outline-none bg-[#F5F6FA] rounded-[4px] border-[0.6px] border-[#D5D5D5]"
              id='position'
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <label htmlFor='status' className="text-[14px] font-[600px] text-dark mb-[11px] block">Trạng thái</label>
            <select
              className="block w-full py-[18px] px-[23px] text-[14px] font-[500] outline-none bg-[#F5F6FA] rounded-[4px] border-[0.6px] border-[#D5D5D5]"
              id='status'
            >
              <option value="">Hoạt động</option>
              <option value="">Tạm dừng</option>
            </select>
          </div>
        </div>
        <div className="mb-[40px]">
          <label htmlFor='avatar' className="text-[14px] font-[600px] text-dark mb-[11px] block">Ảnh danh mục</label>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            acceptedFileTypes={['image/*']}
            name="files"
            labelIdle='
              <div class="flex flex-col items-center justify-center w-full h-full text-dark text-[16px] font-medium text-center">
                Kéo thả hoặc <u className="cursor-pointer">Chọn file ảnh</u>
              </div>'
            className="w-[150px] h-[150px]"
            id='avatar'
          />
        </div>
        <div className="mb-[30px]">
          <label htmlFor='description' className="text-[14px] font-[600px] text-dark mb-[11px] block">Mô tả</label>
          <textarea
            className="w-full h-[200px] py-[18px] px-[23px] text-[14px] font-[500] outline-none bg-[#F5F6FA] rounded-[4px] border-[0.6px] border-[#D5D5D5]"
            id='description'
          />
        </div>
        <div className="w-full flex justify-center mb-[30px]">
          <button className="px-[98px] py-[16px] bg-[#4880FF] hover:bg-[#7ca0f6] rounded-[12px] font-[700] text-[18px] text-white text-center mx-auto">
            Tạo mới
          </button>
        </div>
        <div className="w-full flex justify-center">
          <Link href='/admin/category/list'><u className="text-[18px] font-[700] text-[#4880FF]">Quay lại danh sách</u></Link>
        </div>
      </form>
    </>
  );
}