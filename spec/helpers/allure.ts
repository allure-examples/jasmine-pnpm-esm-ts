/// <reference types="@types/jasmine" />
import AllureJasmineReporter from "allure-jasmine";

const reporter = new AllureJasmineReporter();

jasmine.getEnv().addReporter(reporter);
