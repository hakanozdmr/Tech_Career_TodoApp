package hakanozdmr.tech_career_todoapp.dto;

import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class TodoDto extends BaseDto{


    private String content;

    private Boolean isDone;

}
