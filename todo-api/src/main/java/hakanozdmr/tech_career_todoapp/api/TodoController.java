package hakanozdmr.tech_career_todoapp.api;

import hakanozdmr.tech_career_todoapp.dto.SaveTodoDto;
import hakanozdmr.tech_career_todoapp.model.Todo;
import hakanozdmr.tech_career_todoapp.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("v1/todo")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoService todoService;

    @GetMapping()
    public ResponseEntity<List<Todo>> getAllTodos(){
        return ResponseEntity.ok(todoService.getAllTodos());
    }
    @GetMapping("getAllTodosIsDoneTrue")
    public ResponseEntity<List<Todo>> getAllTodosIsDoneTrue(){
        return  ResponseEntity.ok(todoService.getAllTodosIsDoneTrue());
    }
    @GetMapping("getAllTodosIsDoneFalse")
    public ResponseEntity<List<Todo>> getAllTodosIsDoneFalse(){
        return  ResponseEntity.ok(todoService.getAllTodosIsDoneFalse());
    }

    @PostMapping
    public ResponseEntity<Todo> addTodo(@RequestBody SaveTodoDto saveTodoDto){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(todoService.addTodo(saveTodoDto));
    }
    @DeleteMapping("delete/deleteTodoIsDoneTrue")
    public ResponseEntity<Void> deleteTodoIsDoneTrue(){
        todoService.deleteTodoIsDoneTrue();
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("delete")
    public ResponseEntity<Void> deleteTodosAll(){
        todoService.deleteTodosAll();
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable Long id){
        todoService.deleteTodoById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("update/{id}/updateContent/")
    public ResponseEntity<Todo> updateTodoContent(@PathVariable Long id,@RequestParam String content){
        return ResponseEntity.ok(todoService.updateTodoContent(id,content)) ;
    }
    @PutMapping("update/updateTodoIsDone/{id}")
    public ResponseEntity<Todo> updateTodoIsDone(@PathVariable Long id){
        todoService.updateTodoIsDone(id);
        return ResponseEntity.noContent().build();
    }
}
