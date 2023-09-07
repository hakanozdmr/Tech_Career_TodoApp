package hakanozdmr.tech_career_todoapp.repository;

import hakanozdmr.tech_career_todoapp.model.Todo;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends JpaRepository<Todo,Long> {

    List<Todo> getTodosByIsDoneTrue();

    List<Todo> getTodosByIsDoneFalse();
    void deleteTodosByIsDoneTrue();

    @Transactional
    @Modifying
    @Query("UPDATE Todo t SET t.isDone = true WHERE t.id = :id")
    void updateTodoByIsDoneTrue(@Param("id")Long id);





}
