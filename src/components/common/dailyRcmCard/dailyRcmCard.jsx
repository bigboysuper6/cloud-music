import * as React from "react";
import { Link } from "react-router-dom";
import {
    DailyRcmContainer,
    DailyRcmFont,
    DailyRcmImg,
} from "./styledComponent";

export default function DailyRcmCard(props) {
    return (
        <DailyRcmContainer>
            <Link to={`/Dailysongs`}>
                <DailyRcmImg
                    src={props.dailySongsState.payload.dailySongs[0].al.picUrl}
                    alt="每日推荐歌曲图片"
                />
                <DailyRcmFont>每日推荐</DailyRcmFont>
            </Link>
        </DailyRcmContainer>
    );
}
