package com.heibel.angularjava.tasks.service;

import com.heibel.angularjava.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
