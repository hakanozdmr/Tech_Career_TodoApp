package hakanozdmr.tech_career_todoapp.service;

import hakanozdmr.tech_career_todoapp.dto.SaveTodoDto;
import hakanozdmr.tech_career_todoapp.dto.TodoDto;
import hakanozdmr.tech_career_todoapp.model.Todo;
import hakanozdmr.tech_career_todoapp.repository.TodoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }
    @Transactional
    public List<Todo> getAllTodosIsDoneTrue(){
        return todoRepository.getTodosByIsDoneTrue();
    }
    @Transactional
    public List<Todo> getAllTodosIsDoneFalse(){
        return todoRepository.getTodosByIsDoneFalse();
    }

    public Todo addTodo(SaveTodoDto saveTodoDto){
        return todoRepository.save(Todo.builder().content(saveTodoDto.getContent()).build());
    }
    @Transactional
    public void deleteTodoIsDoneTrue(){
        todoRepository.deleteTodosByIsDoneTrue();
    }
    public void deleteTodosAll(){
        todoRepository.deleteAll();
    }
    public void deleteTodoById(Long id){
        todoRepository.deleteById(id);
    }

    @Transactional
    public Todo updateTodoContent(Long id,String content){
        Todo t = todoRepository.getReferenceById(id);
        t.setContent(content);
        return todoRepository.save(t);
    }
    public void updateTodoIsDoneTrue(Long id){
         todoRepository.updateTodoByIsDoneTrue(id);
    }

}
