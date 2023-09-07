package hakanozdmr.tech_career_todoapp.model;

import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "todos")
public class Todo extends BaseEntity{

    @Lob
    private String content;

    @Builder.Default
    private Boolean isDone = false;
}
