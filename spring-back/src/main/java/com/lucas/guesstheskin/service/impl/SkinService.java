package com.lucas.guesstheskin.service.impl;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.entity.SkinGuess;
import com.lucas.guesstheskin.repository.ISkinRepository;
import com.lucas.guesstheskin.service.ISkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class SkinService implements ISkinService {

    @Autowired
    private ISkinRepository repository;

    HashMap<String, Object> dataMap = new HashMap<>();

    public List<Skin> findAll() {
        return repository.findAll();
    }

    public Skin getRandomSkin() {
        return repository.findRandomSkin();
    }

    public SkinGuess getGuess(Long id){
        Skin skinGuessed = repository.findById(id).get();
        return ((Skin) this.dataMap.get("skin")).compareGuess(skinGuessed);
    }

    public Object getStartupData(String param){
        getData();
        return this.dataMap.get(param);
    }

    private void getData(){
        if(dataMap.get("skin") == null) this.dataMap.put("skin", getRandomSkin());

        if(dataMap.get("nameList") == null){
            List<Object[]> list = repository.getAllNamesAndIds();
            List<HashMap<String, Object>> mapList = new ArrayList<>();

            for(Object[] obj : list){
                HashMap<String, Object> map = new HashMap<>();
                map.put("id", obj[0]);
                map.put("name", obj[1]);

                mapList.add(map);
            }

            this.dataMap.put("nameList", mapList);
        }
    }

}
