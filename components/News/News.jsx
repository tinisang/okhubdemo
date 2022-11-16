import React from "react";
import { Button } from "../Button/Button";
import Select from "react-select";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const News = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ];
  return (
    <div className="news__container">
      <div className="news__title">
        <div className="news__title-btn">
          <Button text="Credential" />
        </div>
        <div className="news__title-text">
          <p>
            <span>Tin tức sự kiện </span>
            <br></br>
            <span className="text-orther">các </span> <span> hoạ</span>t động
            nổi bật <br></br>
            <span className="text-orther">và</span> tài liệu - báo cáo
          </p>
        </div>
      </div>
      <div className="news__categories">
        <div className="news__categories--title">
          <p>Khám phá ngay</p>
        </div>
        <div className="news__categories--items">
          <p className="news__categories--item-active ">Tất cả bài viết</p>
          <p>Tin nổi bật</p>
          <p>Sự kiện</p>
          <p>Hoạt động xã hội</p>
        </div>
      </div>

      <div className="news__selector">
        <div className="news__selector--order">
          <p>Sắp xếp theo: </p>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            // name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
        </div>
        <div className="news__selector--fileds">
            <p>Theo lĩnh vực: </p>
            <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue="default"
            name="color"
            options={options}
          />
        </div>
      </div>
      <div className="news__primary"></div>

      <div className="news__status">
        <div className="news__status--items">
          <div className="news__status--items-text"></div>
          <div className="news__status--item">
            <div className="news__status__item-other"></div>
          </div>
          <div className="news__status--item-btn"></div>
        </div>
      </div>
      <div className="news__documents">
        <div className="news__documents-text"></div>
        <div className="news__document--items"></div>
      </div>
    </div>
  );
};
