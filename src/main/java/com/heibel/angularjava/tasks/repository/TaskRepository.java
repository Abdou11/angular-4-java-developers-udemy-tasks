package com.heibel.angularjava.tasks.repository;

import com.heibel.angularjava.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task,Long> {

}
