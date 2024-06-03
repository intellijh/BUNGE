package com.bunge.memo.service;

import com.bunge.memo.domain.Memo;
import org.springframework.stereotype.Service;

import java.util.List;


public interface MemoService {

    //메모 등록
    public void addMemo(Memo memo);

    //메모 목록
    public List<Memo> getMyMemoList(String loginId);

    //메모 수정
    public void updateMemo(Memo memo);

    //메모 삭제
    public int deleteMemo(Memo memo);


}
