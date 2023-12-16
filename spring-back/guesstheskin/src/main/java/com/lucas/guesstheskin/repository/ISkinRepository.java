package com.lucas.guesstheskin.repository;

import com.lucas.guesstheskin.entity.Skin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ISkinRepository extends JpaRepository<Skin, Long> {

    @Query("SELECT s FROM Skin s ORDER BY RAND() LIMIT 1")
    Skin findRandomSkin();
}
