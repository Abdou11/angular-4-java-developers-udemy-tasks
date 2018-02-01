package com.heibel.angularjava.tasks.service;

import com.heibel.angularjava.tasks.domain.Task;
import com.heibel.angularjava.tasks.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

    @Override
    public Iterable<Task> list() {
        return taskRepository.findAll();
    }
}
