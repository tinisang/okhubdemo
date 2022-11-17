import React, { useState } from "react";
import { Button } from "../Button/Button";
import {CardNews} from "../CardNews";
import {CardReport} from "../CardReport"
import { NumberPage } from "../NumberPage";
// import Select from "react-select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";


export const News = () => {
  const [activeBtn, setActive] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ];
  const [score, setScore] = useState("");
  const scoreData = ["Tat ca", "nhieu luot xem nhat"];
  const handelChange = (even) => {
    console.log(even.value);
  };
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
          <FormControl sx={{ width: 343 }}>
            <Select
              label="custom-select-label"
              id="custom-select"
              value="hello"
              onChange={handelChange}
            >
              {scoreData.map((scoreValue, index) => {
                return <MenuItem key = {index} value={scoreValue}>{scoreValue}</MenuItem>;
              })}
            </Select>
          </FormControl>
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
      <div className="news__primary">
        <div className="news__status">
          <div className="news__status--items">
            <div className="news__status--items-text">
                <p>Bài viết</p>
            </div>
            <div className="news__status--items">
              <div className="news__status__item-other">
                    <CardNews/>
              </div>
              <div className = "news__status__item">
                <CardNews/>
                <CardNews/>
                <CardNews/>
                <CardNews/>
              </div>
            </div>

            <div className="news__status--item-btn">
              <NumberPage number = "1" active = {true}/>
              <NumberPage number = "2" active = {false}/>
              <NumberPage number = "3" active = {false}/>
              <NumberPage number = "4" active = {false}/>
              <NumberPage number = "5" active = {false}/>

            </div>
          </div>
        </div>
        {/* ======= */}
        <div className="news__documents">
          <div className="news__documents-text"><p>Tài liệu - Báo cáo</p></div>
          <div className="news__document--items">
            <CardReport/>
            <CardReport/>
            <CardReport/>
            <CardReport/>
            <CardReport/>
          </div>
        </div>
      </div>
    </div>
  );
};