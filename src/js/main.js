"use strict";
window.addEventListener("DOMContentLoaded", () => {
	function slide1() {
		const trigger = document.querySelectorAll(".service__slider");
		for (let i = 0; i < trigger.length; i++) {
			const width = window.getComputedStyle(
				trigger[i].querySelector(".service__inner")
			).width;
			const slides = trigger[i].querySelectorAll(".service__item");
			const slidesField = trigger[i].querySelector(".service__slides");
			const p = document.querySelector(".service__inner");
			const scr = document.querySelector(".service__pagination input");
			slidesField.style.width = 100 * slides.length + "%";
			slides.forEach((slide) => {
				slide.style.width = width / 2;
			});
			const w = +window
				.getComputedStyle(document.body)
				.width.replace(/\D/g, "");
			p.addEventListener("scroll", (e) => {
				if (p.scrollWidth) {
					if (w < 833 && w > 0) {
						const a = p.scrollLeft / 6.9;
						scr.value = a;
					}
					if (w < 1023 && w > 833) {
						const a = p.scrollLeft / 12;
						scr.value = a;
					}
					if (w > 1023) {
						const a = p.scrollLeft / 6;
						scr.value = a;
					}
				}
			});
			scr.addEventListener("input", (e) => {
				if (scr.value >= 0) {
					if (w < 833 && w > 0) {
						const a = scr.value * 6.9;
						p.scrollLeft = a;
					}
					if (w < 1023 && w > 833) {
						const a = scr.value * 12;
						p.scrollLeft = a;
					}
					if (w > 1023) {
						const a = scr.value * 6;
						p.scrollLeft = a;
					}
				}
			});
		}
	}

	function slide2() {
		const trigger = document.querySelectorAll(".location__slider");
		for (let i = 0; i < trigger.length; i++) {
			const width = window.getComputedStyle(
				trigger[i].querySelector(".location__inner")
			).width;
			const slides = trigger[i].querySelectorAll(".location__item");
			const slidesField = trigger[i].querySelector(".location__slides");
			const current = document.querySelector(".location__current-left");
			slidesField.style.height = 100 * slides.length + "%";
			slides.forEach((slide) => {
				slide.style.width = width;
			});

			let offset = 0;
			let slideIndex = 0;

			trigger[i]
				.querySelector('[data-slide="next"]')
				.addEventListener("click", (e) => {
					e.preventDefault();
					if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
						offset = 0;
					} else {
						offset += +width.replace(/\D/g, "");
					}

					slidesField.style.transform = `translateX(-${offset}px)`;
					if (slideIndex == slides.length - 1) {
						slideIndex = 0;
						current.innerHTML = `${slideIndex + 1}`;
					} else {
						slideIndex++;
						current.innerHTML = `${slideIndex + 1}`;
					}
				});
			trigger[i]
				.querySelector('[data-slide="prev"]')
				.addEventListener("click", (e) => {
					e.preventDefault();
					if (offset == 0) {
						offset = +width.replace(/\D/g, "") * (slides.length - 1);
					} else {
						offset -= +width.replace(/\D/g, "");
					}

					slidesField.style.transform = `translateX(-${offset}px)`;
					if (slideIndex == 0) {
						slideIndex = slides.length - 1;
						current.innerHTML = `${slideIndex + 1}`;
					} else {
						slideIndex--;
						current.innerHTML = `${slideIndex + 1}`;
					}
				});
		}
	}

	function slide3() {
		const trigger = document.querySelectorAll(".gallery__slider");
		for (let i = 0; i < trigger.length; i++) {
			const width = window.getComputedStyle(
				trigger[i].querySelector(".gallery__inner")
			).width;
			const slides = trigger[i].querySelectorAll(".gallery__slide");
			const slidesField = trigger[i].querySelector(".gallery__slides");
			const dots = trigger[i].querySelectorAll(".gallery__btn li");
			const input = document.querySelector(".gallery__slider input");
			const inputB = document.querySelector(".gallery__sliderB input");
			const w = +window
				.getComputedStyle(document.body)
				.width.replace(/\D/g, "");
			slidesField.style.width = 100 * slides.length + "%";
			slides.forEach((slide) => {
				slide.style.width = width;
			});
			input.addEventListener("input", () => {
				if (input.value > 0 && input.value < 20) {
					slideIndex = 0;
				}
				if (input.value > 20 && input.value < 35) {
					slideIndex = 1;
				}
				if (input.value > 35 && input.value < 68) {
					slideIndex = 2;
				}
				if (input.value > 68 && input.value < 100) {
					slideIndex = 3;
				}
				offset = +width.replace(/\D/g, "") * slideIndex;
				slidesField.style.transform = `translateX(-${offset}px)`;
				dots.forEach((dot) => dot.classList.remove("active"));
				dots[slideIndex].classList.add("active");
			});
			let offset = 0;
			let slideIndex = 0;

			const sliderId = trigger[i].getAttribute("id");
			const dotsSlide = document.querySelectorAll(
				`#${sliderId} .gallery__btn li`
			);
			for (let a = 0; a < dotsSlide.length; a++) {
				dotsSlide[a].addEventListener("click", (e) => {
					e.preventDefault();
					const slideTo = e.target.getAttribute("data-slide-to");
					slideIndex = slideTo;
					inp(slideTo);
					offset = +width.replace(/\D/g, "") * slideTo;
					slidesField.style.transform = `translateX(-${offset}px)`;
					dots.forEach((dot) => dot.classList.remove("active"));
					dots[slideIndex].classList.add("active");
				});
			}
		}
	}
	function slide3B() {
		const trigger = document.querySelectorAll(".gallery__sliderB");
		for (let i = 0; i < trigger.length; i++) {
			const width = window.getComputedStyle(
				trigger[i].querySelector(".gallery__inner")
			).width;
			const slides = trigger[i].querySelectorAll(".gallery__slide");
			const slidesField = trigger[i].querySelector(".gallery__slides");
			const dots = trigger[i].querySelectorAll(".gallery__btn li");
			const inputB = document.querySelector(".gallery__sliderB input");
			const w = +window
				.getComputedStyle(document.body)
				.width.replace(/\D/g, "");
			slidesField.style.width = 100 * slides.length + "%";
			slides.forEach((slide) => {
				slide.style.width = width;
			});
			inputB.addEventListener("input", () => {
				if (w > 833 && w < 1023) {
					if (inputB.value > 0 && inputB.value < 10) {
						slideIndex = 0;
					}
					if (inputB.value > 10 && inputB.value < 37) {
						slideIndex = 1;
					}
					if (inputB.value > 37 && inputB.value < 67) {
						slideIndex = 2;
					}
					if (inputB.value > 67 && inputB.value < 100) {
						slideIndex = 3;
					}
				}
				if (w > 1023) {
					if (inputB.value > 0 && inputB.value < 14) {
						slideIndex = 0;
					}
					if (inputB.value > 14 && inputB.value < 40) {
						slideIndex = 1;
					}
					if (inputB.value > 40 && inputB.value < 71) {
						slideIndex = 2;
					}
					if (inputB.value > 71 && inputB.value < 100) {
						slideIndex = 3;
					}
				}
				offset = +width.replace(/\D/g, "") * slideIndex;
				slidesField.style.transform = `translateX(-${offset}px)`;
				dots.forEach((dot) => dot.classList.remove("active"));
				dots[slideIndex].classList.add("active");
			});
			let offset = 0;
			let slideIndex = 0;

			const sliderId = trigger[i].getAttribute("id");
			const dotsSlide = document.querySelectorAll(
				`#${sliderId} .gallery__btn li`
			);
			for (let a = 0; a < dotsSlide.length; a++) {
				dotsSlide[a].addEventListener("click", (e) => {
					e.preventDefault();
					const slideTo = e.target.getAttribute("data-slide-to");
					slideIndex = slideTo;
					inp(slideTo);
					offset = +width.replace(/\D/g, "") * slideTo;
					slidesField.style.transform = `translateX(-${offset}px)`;
					dots.forEach((dot) => dot.classList.remove("active"));
					dots[slideIndex].classList.add("active");
				});
			}
		}
	}
	function inp(idx) {
		const a = idx;
		const input = document.querySelector(".gallery__slider input");
		const inputB = document.querySelector(".gallery__sliderB input");
		const w = +window.getComputedStyle(document.body).width.replace(/\D/g, "");
		if (w > 0 && w < 833) {
			if (a === "0") {
				input.value = "0";
			} else if (a === "1") {
				input.value = "26";
			} else if (a === "2") {
				input.value = "59";
			} else if (a === "3") {
				input.value = "96";
			}
		}

		if (w > 833 && w < 1023) {
			if (a === "0") {
				inputB.value = "4";
			} else if (a === "1") {
				inputB.value = "32";
			} else if (a === "2") {
				inputB.value = "61";
			} else if (a === "3") {
				inputB.value = "93";
			}
		}
		if (w > 1023) {
			if (a === "0") {
				inputB.value = "0";
			} else if (a === "1") {
				inputB.value = "30";
			} else if (a === "2") {
				inputB.value = "62";
			} else if (a === "3") {
				inputB.value = "95";
			}
		}
	}
	function burger() {
		const btn = document.querySelector(".menu__btn");
		const menu = document.querySelector(".burger__menu");
		const menuA = document.querySelectorAll(".burger__menu a");
		const burger = document.querySelector(".menu__burger");
		const div = document.querySelector(".burger");
		const head = document.querySelector(".head");
		const header = document.querySelector(".header .container");

		div.addEventListener("click", (e) => {
			e.preventDefault();
			div.classList.toggle("active");
			menu.classList.toggle("active");
			burger.classList.toggle("active");
			head.classList.toggle("filt");
			header.classList.toggle("filt");
		});
		for (let i = 0; i < menuA.length; i++) {
			menuA[i].addEventListener("click", (e) => {
				div.classList.toggle("active");
				menu.classList.toggle("active");
				burger.classList.toggle("active");
				head.classList.toggle("filt");
				header.classList.toggle("filt");
			});
		}
	}
	//phone mask
	function phoneInp() {
		const inp = document.querySelector(".form__left .phone");
		inp.addEventListener("click", () => {
			inp.value = "+38";
		});
		inp.onkeydown = function () {
			const curLen = inp.value.length;

			if (curLen == 3) inp.value = inp.value + "(";
			if (curLen == 7) inp.value = inp.value + ") ";
			if (curLen == 12) inp.value = inp.value + "-";
			if (curLen > 16) inp.value = inp.value.substring(0, inp.value.length - 1);
		
		};
	}
	//phone mask
	//date mask
	function dateInp() {
		const input = document.querySelector(".form__right .date");
		input.addEventListener("keypress", function (e) {
			if (e.keyCode < 47 || e.keyCode > 57) {
				e.preventDefault();
			}
			const len = input.value.length;
			if (len !== 1 || len !== 3) {
				if (e.keyCode == 47) {
					e.preventDefault();
				}
			}
			if (len === 2) {
				input.value += "/";
			}
			if (len === 5) {
				input.value += "/";
			}
		});
	}
	//date mask

	phoneInp();
	dateInp();
	slide1();
	slide2();
	slide3();
	slide3B();
	burger();
});
