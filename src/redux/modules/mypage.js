import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const initialState = {
  user: {
    userId: 0,
    nickname: "챌린이",
    profileImage:
      "https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png",
    point: 110,
    levelName: "레벨1",
    levelIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlwiGD-SGQ1o7a3LV6bv845DCONAKTsd7yw&usqp=CAU",
    experiencePoint: 150,
  },
  list: [
    {
      challengeId: 0,
      title: "미라클 모닝(모집중)",
      content: "매일 아침 6시에 기상 후 명상하기",
      category: "루틴",
      challengeImage:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjRfMyAg/MDAxNTU4Njk4NzY1Mjgx.TnYhG_pgAotagR12cQ92jf860VzfBPQKMy-bbEhSph8g.pvKOXCPBC1ShVkprSWAR2ulrLWuilRjkUJjhlqJGyB8g.JPEG.dudb850320/%EB%AA%85%EC%83%81.jpg?type=w800",
      maxMember: 10,
      currentMember: 0,
      startDate: "2022-02-28",
      endDate: "2022-03-10",
      isPrivate: false,
      tagName: ["새벽기상", "명상"],
      status: "before",
    },
    {
      challengeId: 1,
      title: "미라클 모닝(모집중)",
      content: "매일 아침 6시에 기상 후 명상하기",
      category: "루틴",
      challengeImage:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjRfMyAg/MDAxNTU4Njk4NzY1Mjgx.TnYhG_pgAotagR12cQ92jf860VzfBPQKMy-bbEhSph8g.pvKOXCPBC1ShVkprSWAR2ulrLWuilRjkUJjhlqJGyB8g.JPEG.dudb850320/%EB%AA%85%EC%83%81.jpg?type=w800",
      maxMember: 10,
      currentMember: 0,
      startDate: "2022-02-28",
      endDate: "2022-03-10",
      isPrivate: false,
      tagName: ["새벽기상", "명상"],
      status: "before",
    },
    {
      challengeId: 2,
      title: "미라클 모닝(진행중)",
      content: "매일 아침 6시에 기상 후 명상하기",
      category: "루틴",
      challengeImage:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjRfMyAg/MDAxNTU4Njk4NzY1Mjgx.TnYhG_pgAotagR12cQ92jf860VzfBPQKMy-bbEhSph8g.pvKOXCPBC1ShVkprSWAR2ulrLWuilRjkUJjhlqJGyB8g.JPEG.dudb850320/%EB%AA%85%EC%83%81.jpg?type=w800",
      maxMember: 10,
      currentMember: 0,
      startDate: "2022-02-28",
      endDate: "2022-03-10",
      isPrivate: false,
      tagName: ["새벽기상", "명상"],
      status: "ing",
    },
    {
      challengeId: 3,
      title: "미라클 모닝(성공)",
      content: "매일 아침 6시에 기상 후 명상하기",
      category: "루틴",
      challengeImage:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjRfMyAg/MDAxNTU4Njk4NzY1Mjgx.TnYhG_pgAotagR12cQ92jf860VzfBPQKMy-bbEhSph8g.pvKOXCPBC1ShVkprSWAR2ulrLWuilRjkUJjhlqJGyB8g.JPEG.dudb850320/%EB%AA%85%EC%83%81.jpg?type=w800",
      maxMember: 10,
      currentMember: 0,
      startDate: "2022-02-28",
      endDate: "2022-03-10",
      isPrivate: false,
      tagName: ["새벽기상", "명상"],
      status: "success",
    },
    {
      challengeId: 4,
      title: "미라클 모닝(실패)",
      content: "매일 아침 6시에 기상 후 명상하기",
      category: "루틴",
      challengeImage:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjRfMyAg/MDAxNTU4Njk4NzY1Mjgx.TnYhG_pgAotagR12cQ92jf860VzfBPQKMy-bbEhSph8g.pvKOXCPBC1ShVkprSWAR2ulrLWuilRjkUJjhlqJGyB8g.JPEG.dudb850320/%EB%AA%85%EC%83%81.jpg?type=w800",
      maxMember: 10,
      currentMember: 0,
      startDate: "2022-02-28",
      endDate: "2022-03-10",
      isPrivate: false,
      tagName: ["새벽기상", "명상"],
      status: "fail",
    },
  ],
};

export default handleActions({}, initialState);

const actionCreators = {
  //액션 생성자 내보내기
};

export { actionCreators };
