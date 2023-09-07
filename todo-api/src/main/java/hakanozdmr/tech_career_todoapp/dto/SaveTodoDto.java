package hakanozdmr.tech_career_todoapp.dto;

import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class SaveTodoDto {

    @Lob
    @NotBlank
    @Size(min = 3)
    private String content;


}
