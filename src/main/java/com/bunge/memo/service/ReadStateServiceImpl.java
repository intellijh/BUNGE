package com.bunge.memo.service;

import com.bunge.memo.domain.ReadState;
import com.bunge.memo.mapper.ReadStateMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReadStateServiceImpl implements ReadStateService {

    private ReadStateMapper readStateMapper;

    @Autowired
    public ReadStateServiceImpl(ReadStateMapper readStateMapper) {
        this.readStateMapper = readStateMapper;
    }

    @Override
    public void addReadState(ReadState readState) {
        readStateMapper.addReadState(readState);
    }


    @Override
    public int countReadState(ReadState readState) {
        return readStateMapper.countReadState(readState);
    }

    @Override
    public List<ReadState> getAllReadState(String loginId) {
        return readStateMapper.getAllReadState(loginId);
    }

    @Override
    public int countRemainPage(ReadState readState) {

        int totalpage = readStateMapper.countTotalPage(readState);
        int readpage = readStateMapper.countReadPage(readState);
        int remainpage = totalpage - readpage;

        return remainpage;
    }

    @Override
    public void updateReadState(ReadState readState) {
        readStateMapper.updateReadState(readState);
    }

    @Override
    public int changeReadState(ReadState readState) {
        return readStateMapper.changeReadState(readState);
    }

}