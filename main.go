package main

import (
	"context"
	"log"

	x "github.com/caddyserver/xcaddy"
)

var OutputFile = "./x"

var builder = x.Builder{
	Compile: x.Compile{
		Cgo: false,
	},

	CaddyVersion: "master",
	Plugins: []x.Dependency{
		{
			PackagePath: "github.com/tailscale/caddy-tailscale",
			Version:     "main",
		},
		{
			PackagePath: "github.com/mholt/caddy-ratelimit",
			Version:     "master",
		},
// 		{
// 			PackagePath: "github.com/abiosoft/caddy-json-schema",
// 			Version:     "master",
// 		},
	},
	Replacements: []x.Replace{},
	RaceDetector: false,
	SkipCleanup:  false,
	SkipBuild:    false,
	Debug:        false,
	BuildFlags:   "-ldflags '-w -s' -trimpath",
	ModFlags:     "",
}

func main() {
	if err := builder.Build(context.Background(), OutputFile); err != nil {
		log.Fatal(err)
	}
}
