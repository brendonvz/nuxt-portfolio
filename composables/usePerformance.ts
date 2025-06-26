export const usePerformance = () => {
	const measurePageLoad = () => {
		if (process.client) {
			// Measure First Contentful Paint
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.name === "first-contentful-paint") {
						console.log("FCP:", entry.startTime);
					}
				}
			});
			observer.observe({ entryTypes: ["paint"] });

			// Measure Largest Contentful Paint
			const lcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const lastEntry = entries[entries.length - 1];
				console.log("LCP:", lastEntry.startTime);
			});
			lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

			// Measure page load time
			window.addEventListener("load", () => {
				const loadTime =
					performance.timing.loadEventEnd - performance.timing.navigationStart;
				console.log(`Page Load Time: ${loadTime}ms`);
			});
		}
	};

	const preloadCriticalResources = () => {
		if (process.client) {
			// Preload critical images
			const link = document.createElement("link");
			link.rel = "preload";
			link.as = "image";
			link.href = "/images/profilepic.png";
			document.head.appendChild(link);
		}
	};

	return {
		measurePageLoad,
		preloadCriticalResources,
	};
};
