package com.bunge.memo.service;

import com.bunge.memo.domain.ReadState;

import java.util.List;

public interface ReadStateService {

    //독서상태 추가
    public void addReadState(ReadState readState);

    //해당 책의 상태에 따른 유저 수
    public int countReadState(ReadState readState);

    //로그인한 사용자의 모든 독서상태
    List<ReadState> getAllReadState(String loginId);

}
